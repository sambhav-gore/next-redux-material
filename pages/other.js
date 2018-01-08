import React, {Component} from "react";
import DefaultLayout from "../src/layouts/DefaultLayout";
import withRoot from "../src/helpers/with-root";
import AddCount from "../src/components/AddCount";
import Link from "next/link";

class OtherPage extends Component {

  render() {
    return (
      <div>
        <DefaultLayout>
          <AddCount/>
          <Link href={`/`}>
            <a>Home</a>
          </Link>
        </DefaultLayout>
      </div>
    )
  }
}

export default withRoot(OtherPage);
