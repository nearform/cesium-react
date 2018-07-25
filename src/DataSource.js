import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { DataSourcesContext, EntitiesContext } from "./context";

// abstract
class DataSource extends CesiumComponent {
  static propTypes = {
    clock: PropTypes.any,
    clustering: PropTypes.any,
    name: PropTypes.string,
    onChanged: PropTypes.func,
    onError: PropTypes.func,
    onLoading: PropTypes.func,
    show: PropTypes.bool,
  };

  static cesiumProps = ["clock", "clustering", "name", "show"];

  static cesiumEvents = ["changedEvent", "errorEvent", "loadingEvent"];

  componentWillMount() {
    super.componentWillMount();
    if (this.cesiumElement) {
      if (this.props.clock) {
        this.cesiumElement.clock = this.props.clock;
      }
      if (this.props.clustering) {
        this.cesiumElement.clustering = this.props.clustering;
      }
      if (this.props.name) {
        this.cesiumElement.name = this.props.name;
      }
      if (this.props.show === true || this.props.show === false) {
        this.cesiumElement.show = this.props.show;
      }
    }
  }

  get parent() {
    const { dataSources } = this.props;
    if (dataSources && !dataSources.isDestroyed()) {
      return dataSources;
    }
    return null;
  }

  createCesiumElement() {
    throw new Error("DataSource#createCesiumElement is not implemented");
  }

  mountCesiumElement(entity) {
    this.parent.add(entity);
  }

  destroyCesiumElement(entity) {
    const p = this.parent;
    if (p) {
      p.remove(entity);
    }
  }

  render() {
    return (
      <EntitiesContext.Provider value={this.cesiumElement.entities}>
        {this.props.children}
      </EntitiesContext.Provider>
    );
  }
}

const DataSourceContainer = props => (
  <DataSourcesContext.Consumer>
    {dataSources => <DataSource {...props} dataSources={dataSources} />}
  </DataSourcesContext.Consumer>
);

DataSourceContainer.propTypes = DataSource.propTypes;
DataSourceContainer.cesiumProps = DataSource.cesiumProps;
DataSourceContainer.cesiumEvents = DataSource.cesiumEvents;

export default DataSourceContainer;
