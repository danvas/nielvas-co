import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import * as ROUTES from '../../constants/routes';
import { useWindowWidth } from '../../hooks';
import colors from '../../style/custom.scss';
import cloudImg from '../../images/cloud.jpg';

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className,
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  }
}

function DropMenu(props) {
  const toClassName = location => `lead menu-link${props.activePath === location? '-active' : ''}`;
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <div className="lead p-2">Menu</div>
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item as="span" eventKey="1" active>
          <div className="text-center">
            <Link className={toClassName(ROUTES.LANDING)} to={ROUTES.LANDING}>Home</Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="span" eventKey="2">
          <div className="text-center">
            <Link className={toClassName(ROUTES.WORKS)} to={ROUTES.WORKS}>Work</Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="span" eventKey="3">
          <div className="text-center">
            <Link className={toClassName(ROUTES.ABOUT)} to={ROUTES.ABOUT}>About</Link>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function ExpandedMenu(props) {
  const toClassName = location => `lead menu-link${props.activePath === location? '-active' : ''}`;
  return (
    <div className="d-flex justify-content-between py-2 px-3">
      <div className="align-self-center text-center">
        <Link 
          className={toClassName(ROUTES.LANDING)} 
          style={{fontSize: "1.7rem"}} 
          to={ROUTES.LANDING}
        >
          Daniel Vasquez
        </Link>
      </div>
      <div className="align-self-center text-center">
        <Link className={toClassName(ROUTES.WORKS)} to={ROUTES.WORKS}>Work</Link>
      </div>
      {/* <div className="align-self-center text-center">
        <Link className={toClassName(ROUTES.IDEAS)} to={ROUTES.IDEAS}>Ideas</Link>
      </div> */}
      <div className="align-self-center text-center">
        <Link className={toClassName(ROUTES.ABOUT)} to={ROUTES.ABOUT}>About</Link>
      </div>
    </div>
  );
}

function updateBackground(location) {
  const backgroundImgMap = {
    [ROUTES.LANDING]: `url('${cloudImg}')`,
    [ROUTES.ABOUT]: colors.skyGradient,
  };
  if (backgroundImgMap[location]) {
    document.body.style.backgroundImage = backgroundImgMap[location];
  } else {
    document.body.style.backgroundImage = colors.skyGradient;
  }
}

function MenuBar(props) {
  // const windowWidth = useWindowWidth();
  // const expandMenu = windowWidth > 600;
  const expandMenu = true; // Always expanded (for now).
  updateBackground(props.location.pathname);

  return (
    <div>
      {expandMenu? 
        <ExpandedMenu activePath={props.location.pathname}/>
        :
        <DropMenu activePath={props.location.pathname}/>
      }
    </div>
  );
}

export default withRouter(MenuBar);