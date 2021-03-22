import React, { Component } from "react";
import { observer } from "mobx-react";

export const presenter = (Presenter, View, Styles) => {
  const ViewComp = observer(View);
  class WrappedView extends Component {
    static View = View;

    // Styles of pm are option, view must always be present.
    // Apply type any as you can't explicitly define their types
    pm: any | undefined;
    cn: any | undefined;
    view: any;

    constructor(props) {
      super(props);
      if (Styles) {
        this.cn = Styles();
      }
      if (Presenter) {
        this.pm = props.pm || new Presenter(props, this);
        this.pm._hoc = !props.pm;
      }
      this.view = View;
    }

    componentDidMount() {
      if (this.pm) {
        this.pm.fetch && this.pm.fetch();
      }
    }

    componentDidUpdate(next) {
      this.pm && this.pm.update && this.pm.update(next);
    }

    render() {
      return <ViewComp {...this.props} pm={this.pm} cn={this.cn} />;
    }
  }
  return WrappedView;
};
