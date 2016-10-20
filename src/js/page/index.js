/**
 * Created by chenanguo on 2016/10/14.
 */
import React from "react";
import ReactDOM from "react-dom";

import ComponentDemo from "../component/ComponentDemo";

class App extends React.Component {
    // 使用React.Component创建组件，需要通过在constructor中调用super()将props传递给React.Component。另外react 0.13之后props必须是不可变的。
    constructor(props) {
        super(props);
        // 使用ES6 class语法创建组件，初始化state的工作要在constructor中完成。不需要再调用getInitialState方法。这种语法更加的符合JavaScript语言习惯。
        this.state = {counter: 0};
        // 也可以将绑定方法写到constructor中
        // this.handleClick = this.handleClick.bind(this);
    }

    // class中的方法不会自动将this绑定到实例中。必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定。
    // 也可以将绑定方法写到constructor中
    handleClick() {
        this.setState({counter: this.state.counter + 1});
    }
    // 或者使用箭头函数（注意：箭头函数这样写会报错，未知原因）
    // handleClick = () => {
    //     this.setState({counter: this.state.counter + 1});
    // };

    render() {
        return (<div><ComponentDemo /><br/>this.props.numProp = {this.props.numProp}<br/>this.props.strProp
            = "{this.props.strProp}"<br/>this.state.counter = {this.state.counter}<br />
            <button onClick={this.handleClick.bind(this)}>点击一次，this.state.counter加1</button>
        </div>)
    }
}
// 用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以propTypes要写在组件外部。
App.propTypes = {
    numProp: React.PropTypes.number.isRequired,
    strProp: React.PropTypes.string.isRequired
};
// getDefaultProps方法，由于props不可变，所以现在被定义为一个属性，和propTypes一样，要定义在class外部。
App.defaultProps = {
    numProp: 1111,
    strProp: "abc"
};

ReactDOM.render(<App />, document.getElementById("page"));


// console.log("console.log输出的内容");
// document.write("document.write输出的内容");