import * as React from "react";
import { DropDownItem, NULL_CHOICE } from "./fb_select";
import { FilterSearch } from "./filter_search";
import { equals } from "../util";

export interface FBSelectProps {
  /** Value to show. */
  selectedItem: DropDownItem | undefined;
  /** Notifies component user that something was clicked. */
  onChange(selection: DropDownItem): void;
  /** All possible select options. */
  list: DropDownItem[];
  /** Allow user to select no value. */
  allowEmpty?: boolean;
  /** Text shown before user selection. */
  placeholder?: string | undefined;
  /** Extra class names to add. */
  extraClass?: string;
}

export class FBSelect extends React.Component<FBSelectProps, {}> {

  get item() { return this.props.selectedItem || NULL_CHOICE; }
  get list() {
    if (this.props.allowEmpty) {
      return this.props.list.concat(NULL_CHOICE);
    } else {
      return this.props.list;
    }
  }

  shouldComponentUpdate(nextProps: FBSelectProps) {
    return !equals(this.props, nextProps);
  }

  render() {
    const { extraClass } = this.props;
    return <div className={`filter-search ${extraClass ? extraClass : ""}`}>
      <FilterSearch
        selectedItem={this.item}
        items={this.list}
        onChange={this.props.onChange} />
    </div>;
  }
}
