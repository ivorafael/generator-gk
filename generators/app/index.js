'use strict';
const Generator = require( 'yeoman-generator' );
const chalk = require( 'chalk' );
const yosay = require( 'yosay' );
const kebabCase = require( 'lodash/kebabCase' );
const snakeCase = require( 'lodash/snakeCase' );
const camelCase = require( 'lodash/camelCase' );
const basePath = 'frontend/source'

module.exports = class extends Generator {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  prompting() {
    // this.log( yosay(
    //   'Welcome to the good ' + chalk.red( 'generator-gk' ) + ' generator!'
    // ) );

    const mainPrompt = [ {
      type: 'list',
      name: 'actionType',
      message: 'What do you like to create?',
      choices: [ 'Component', 'Module', 'Section', 'Page', 'Action', 'Reducer', 'Action & Reducer', 'Styleguide page' ]
    }, {
      type: 'input',
      name: 'itemName',
      message: 'Provide a name (ex: Textfield):',
      validate: ( value ) => {
        return /^[A-Z][a-zA-Z0-9\/]*$/.test( value ) || 'Invalid name.'
      }
    }];

    const pagePrompt = [ {
      type: 'confirm',
      name: 'includeRedux',
      message: 'Generate related action and reducer?',
      default: false
    }, {
      type: 'confirm',
      name: 'includeStyleguide',
      message: 'Generate related styleguide page?',
      default: false
    }]

    return this.prompt( mainPrompt ).then( props => {

      if ( props.actionType == 'Page' ) {
        return this.prompt( pagePrompt ).then( _props => {
          this.props = Object.assign( {}, props, _props );
        } );
      }

      this.props = props;
    } );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _getData() {
    let _itemName = this.props.itemName;
    let _destination = kebabCase( _itemName );
    let _length = 0;
    let _folderLevels = '';

    if ( _itemName.indexOf( '/' ) >= 0 ) {
      _itemName = _itemName.split( '/' );

      _length = ( _itemName.length - 1 );
      _folderLevels = Array.from( { length: _length } ).map(( i ) => { return '../' } ).join( '' );
      _destination = _itemName.map(( item ) => {
        return kebabCase( item )
      } ).join( '/' );

      _itemName = _itemName[ _length ];
    }

    return {
      inputName: _itemName,
      destination: _destination,
      folderLevels: _folderLevels,
      kebabCaseName: kebabCase( _itemName ),
      upperCaseName: snakeCase( _itemName ).toUpperCase(),
      camelCaseName: camelCase( _itemName )
    }
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createComponent() {
    const data = this._getData();

    this.fs.copyTpl(
      this.templatePath( 'component/component.jsx.txt' ),
      this.destinationPath( `${ basePath }/components/${ data.destination }/${ data.kebabCaseName }.jsx` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    );

    this.fs.copyTpl(
      this.templatePath( 'component/component.test.js.txt' ),
      this.destinationPath( `${ basePath }/components/${ data.destination }/${ data.kebabCaseName }.test.js` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    );

    this.fs.copyTpl(
      this.templatePath( 'component/component.scss.txt' ),
      this.destinationPath( `${ basePath }/components/${ data.destination }/${ data.kebabCaseName }.scss` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createDefaultItem( kind ) {
    const data = this._getData();

    this.fs.copyTpl(
      this.templatePath( `${ kind }/${ kind }.jsx.txt` ),
      this.destinationPath( `${ basePath }/platform/${ kind }s/${ data.destination }/${ data.kebabCaseName }.jsx` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    )

    this.fs.copyTpl(
      this.templatePath( `${ kind }/${ kind }.test.js.txt` ),
      this.destinationPath( `${ basePath }/platform/${ kind }s/${ data.destination }/${ data.kebabCaseName }.test.js` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    )

    this.fs.copyTpl(
      this.templatePath( `${ kind }/${ kind }.scss.txt` ),
      this.destinationPath( `${ basePath }/platform/${ kind }s/${ data.destination }/${ data.kebabCaseName }.scss` ), {
        name: data.inputName,
        kebabCaseName: data.kebabCaseName,
        folderLevels: data.folderLevels
      }
    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createModule() {
    this._createDefaultItem( 'module' );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createSection() {
    this._createDefaultItem( 'section' );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createPage() {
    this._createDefaultItem( 'page' );

    if ( this.props.includeRedux ) {
      this._createAction();
      this._createReducer();
    }

    if ( this.props.includeStyleguide ) {
      this._createStyleguidePage();
    }
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createAction() {
    const data = this._getData();

    this.fs.copyTpl(
      this.templatePath( 'action/action.js.txt' ),
      this.destinationPath( `${ basePath }/platform/actions/${ data.kebabCaseName }.js` ), {
        name: data.inputName,
        upperCaseName: data.upperCaseName,
        folderLevels: data.folderLevels
      }
    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createReducer() {
    const data = this._getData();

    this.fs.copyTpl(
      this.templatePath( 'reducer/reducer.js.txt' ),
      this.destinationPath( `${ basePath }/platform/reducers/${ data.kebabCaseName }.js` ), {
        camelCaseName: data.camelCaseName,
        upperCaseName: data.upperCaseName,
        folderLevels: data.folderLevels
      }
    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  _createStyleguidePage() {
    const data = this._getData();

    this.fs.copyTpl(
      this.templatePath( 'styleguide-page/styleguide-page.jsx.txt' ),
      this.destinationPath( `${ basePath }/styleguide/pages/${ data.kebabCaseName }.jsx` ), {
        name: data.inputName,
        camelCaseName: data.camelCaseName,
        upperCaseName: data.upperCaseName,
        folderLevels: data.folderLevels
      }
    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  writing() {
    if ( this.props.actionType === 'Component' ) {
      this._createComponent();
    }

    if ( this.props.actionType === 'Module' ) {
      this._createModule();
    }

    if ( this.props.actionType === 'Section' ) {
      this._createSection();
    }

    if ( this.props.actionType === 'Page' ) {
      this._createPage();
    }

    if ( this.props.actionType === 'Action' ) {
      this._createAction();
    }

    if ( this.props.actionType === 'Reducer' ) {
      this._createReducer();
    }

    if ( this.props.actionType === 'Action & Reducer' ) {
      this._createAction();
      this._createReducer();
    }

    if ( this.props.actionType === 'Styleguide page' ) {
      this._createStyleguidePage();
    }
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}