"use strict";

import React from "react";

const Title = props => (
  <div>
    <h1>Helo {`${props.name} ${props.lastName}!!`}!</h1>
  </div>
);

Title.defaultProps = {
  name: "It's not about to see the light,",
  lastName: "but if you wana find hell with me"
};

// const Title = React.createClass({
//   getDefaultProps: function() {
//     return {
//       name: "Desconhecido",
//       lastName: "No Last Name"
//     };
//   },
//   render: function() {
//     return (
//       <div>
//         <h1>
//           Não sei se tá rolando, {this.props.name + " " + this.props.lastName}
//         </h1>
//       </div>
//     );
//   }
// });

export default Title;
