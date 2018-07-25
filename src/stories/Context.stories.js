import React from "react";
import { storiesOf } from "@storybook/react";

const EntitiesContext = React.createContext();

export default () => {
  storiesOf("Context", module).addWithJSX("default", () => (
    <div>
      <EntitiesContext.Provider value={'a'}>
        <div>
          <EntitiesContext.Consumer>
            {value => <span>{value}</span>}
          </EntitiesContext.Consumer>
          <div>
            <EntitiesContext.Provider value={'b'}>
              <div>
                <EntitiesContext.Consumer>
                  {value => <span>{value}</span>}
                </EntitiesContext.Consumer>
              </div>
            </EntitiesContext.Provider>
          </div>
        </div>
      </EntitiesContext.Provider>
    </div>
  ));
};
