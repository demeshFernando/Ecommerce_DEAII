import {
  FontAwesomeIcon,
  faAngleRight,
  faGlobe,
} from "../../configs/config.jsx";

import sideBarItemRepo from "../../repo/sideBarItemRepo.jsx";

/**
 * Side bar sub main component which uses to represent the individual section in side bar.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 27 July 2024
 * @component
 * @param {object} props Used to pass the values coming from the repo.
 * @returns The sidebar component with the provided attributes
 * @example
 * // Example usage:
 * const <SideBar />
 * Remember to actually work this component there need to be a repo, other built in sub components to load details
 * otherwise it may or may not get served as expected.
 * return the card with the following added properties.
 */
function SideBarSubMainSection(props) {
  const generatedSideBarValues = sideBarItemRepo.map((item, index) => (
    <SideBarItems
      key={index}
      itemValues={item}
      getPassingJSON={props.getPassingJSON}
    />
  ));
  let screenHeight = window.innerHeight - 50;
  const customStyle = {
    height: screenHeight,
  };
  return (
    <div style={customStyle} className="main-section">
      {generatedSideBarValues}
      <h2 className="header">Help & Settings</h2>
      <div className="item-list">
        <div className="item-container">
          <p className="items">Your Account</p>
        </div>
        <div className="account-details-item-container">
          <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
          <p className="items">{props.accountDetails.language}</p>
        </div>
        <div className="account-details-item-container">
          <img
            src={props.accountDetails.countryImage}
            alt={props.accountDetails.country}
            className="country-flag"
          />
          <p className="items">{props.accountDetails.country}</p>
        </div>
      </div>
    </div>
  );
}

function SideBarItems(props) {
  return (
    <>
      <h2 className="header">{props.itemValues.listHeader}</h2>
      <div className="item-list">
        {props.itemValues.listItems.map((itemDetailContainer, itemIndex) => (
          <ListOfItems
            key={itemIndex}
            checkingContainerValues={itemDetailContainer}
            length={itemDetailContainer.length}
            getPassingJSON={props.getPassingJSON}
            name={
              itemDetailContainer.length === 1
                ? itemDetailContainer[0].itemName
                : itemDetailContainer[0]
            }
          />
        ))}
      </div>
      <hr />
    </>
  );
}

function ListOfItems(props) {
  const triggerToggler = (containerName) => {
    let containerValue = [];
    if (props.length > 1) {
      containerValue = props.checkingContainerValues;
    }

    props.getPassingJSON({
      isVisible: true,
      itemSet: containerValue,
    });
  };

  return (
    <div
      className="item-container"
      onClick={
        props.length > 1
          ? () => triggerToggler(props.name)
          : () => (window.location.href = props.referral)
      }
    >
      {props.length === 1 ? (
        <SingleItemBuildUp name={props.name} />
      ) : (
        <MultipleItemBuildUp name={props.name} />
      )}
    </div>
  );
}

function SingleItemBuildUp(props) {
  return <p className="items">{props.name}</p>;
}

function MultipleItemBuildUp(props) {
  return (
    <>
      <p className="items">{props.name}</p>
      <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
    </>
  );
}

export { SideBarSubMainSection, SingleItemBuildUp };
