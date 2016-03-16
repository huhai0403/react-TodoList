/*** Created by Administrator on 2015/11/10 0010.*/
/*nav*/
/*HeadPic*/
var HeadPic = React.createClass({
    render:function(){
        return  (<div id="headpic">
            <a href="#"><img src="img/1.gif" /></a>
        </div>)
    }
});
var items = ['任务', '便签', '项目', '地点', '标签'];
var active = { color:"#fff", background:"#000"};
var i = 0 ;
var n ;
var views  ;
var NavList = React.createClass({
    getInitialState:function(){
        return {data: [],
                NumLink: 0,
                NumTop: 0
        }
    },
    navLinkClick:function(index){
        /*alert(i);*/
        i = index;
        this.setState({
            NumTop : index,
            NumLink : index
        });
    },
    render:function(){
            var that = this;
            return(<div className="nav">
                    <ul  >
                        {items.map(function(item,index){
                            var className ;
                            that.state.NumLink == index ? className = 'active' : className = '';
                            return (<li key={index} className = {className}  onClick={that.navLinkClick.bind(that,index)} ><a    href="#">{item}</a></li>)
                        })}
                    </ul>
                   </div>
               )
    }
});
/*top*/
var myDate = new Date();
/*time*/
var TopBox = React.createClass({
    getInitialState:function(){
        return{ ThisYears : myDate.getFullYear(),
                ThisMouth : myDate.getMonth() + 1,
                ThisDays : myDate.getDate(),
                ThisHours : myDate.getHours(),
                ThisMinutes :myDate.getMinutes()
        }
    },
    addDayClick:function(){
        this.setState({ThisDays:this.state.ThisDays + 1})
    },
    minDayClick:function(){
        this.setState({ThisDays:this.state.ThisDays - 1})
    },
    render:function(){
        return(
            <div className="top clear">
                <span className="time">{this.state.ThisYears+'年'+this.state.ThisMouth+'月'+this.state.ThisDays+"日 "+this.state.ThisHours+':'+this.state.ThisMinutes}</span>
                <div className="checktime">
                    <a href="#" onClick={this.minDayClick}>←</a>
                    <a href="#" onClick={this.addDayClick}>→</a>
                </div>
            </div>
        )
    }
});
/*main*/
/*任务*/
var MainBoxTask = React.createClass({
    render:function(){
       return(
           <div className="box clear">
               <FirstBlock />
               <SecondBlock />
               <ThirdBlock />
               <FourthBlock />
           </div>
       )
    }
});
/*便签*/
var MainBoxNote = React.createClass({
    render:function(){
        return(
            <div className="box clear">
                <h1>便签</h1>
            </div>
        )
    }
});
/*项目*/
var MainBoxPro = React.createClass({
    render:function(){
        return(
            <div className="box clear">
                <h1>项目</h1>
            </div>
        )
    }
});
/*地点*/
var MainBoxPlace = React.createClass({
    render:function(){
        return(
            <div className="box clear">
                <h1>地点</h1>
            </div>
        )
    }
});
/*标签*/
var MainBoxTag = React.createClass({
    render:function(){
        return(
            <div className="box clear">
                <p>标签</p>
            </div>
        )
    }
});
/*block*/
var EventEach = React.createClass({
    getInitialState: function () {
        return {eventDisplayed: true,
                eventShowed:true,
                eventChange:true
               }
    },
    eventDisClick:function(){
        this.setState({
            eventDisplayed: false
        });
    },
    eventChangeClick: function() {
        this.setState({eventChange: !this.state.eventChange});

    },
    render:function(){
        var styleObj={
            display:this.state.eventDisplayed ? "block": "none"
        };
        return(
            <li  style={styleObj}>
                <p className="caption clear"><input type="text" defaultvalue="" disabled={this.state.eventChange} /><em>{document.lastModified.substring(0,10)}</em><button title="修改" onClick={this.eventChangeClick} className="change"><img src="img/2.gif" /></button><button title="删除" className="change" onClick={this.eventDisClick} ><img src="img/3.gif" /></button></p>
                <textarea className="describe" disabled={this.state.eventChange} ></textarea>
            </li>
        )
    }
});
var eventFirstList = [<EventEach />], eventSecondList = [] , eventThirdList = [] , eventFourthList = [];
var BlockTitleTip = ['很重要-很紧急','重要-不紧急','不重要-紧急','不重要-不紧急']
var FirstBlock = React.createClass({
    BuildEvent:function(){
        n = i;
        /*alert(n);*/
        this.setState({eventFirstList:eventFirstList.push(<EventEach />)});
    },
    render:function(){
        return(
            <div className="fir_block br mr_1">
                <div className="block">
                    <div className="title first clear">
                        <span>{BlockTitleTip[0]}</span>
                        <a href="#" onClick={this.BuildEvent}>+</a>
                    </div>
                    <div className="oh">
                        <ul className="list">
                            {eventFirstList.map(function(listeach,Maxnum){
                                return(<div key={Maxnum}>{listeach}</div>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
var SecondBlock = React.createClass({
    BuildEvent:function(){
        this.setState({eventSecondList:eventSecondList.push(<EventEach />)});
    },
    render:function(){
        return(
            <div className="sec_block">
                <div className="block">
                    <div className="title second clear">
                        <span>{BlockTitleTip[1]}</span>
                        <a href="#" onClick={this.BuildEvent}>+</a>
                    </div>
                    <div className="oh">
                        <ul className="list">
                            {eventSecondList.map(function(listeach,Maxnum){
                                return(<div key={Maxnum}>{listeach}</div>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
var ThirdBlock = React.createClass({
    BuildEvent:function(){
        this.setState({eventThirdList:eventThirdList.push(<EventEach />)});
    },
    render:function(){
        return(
            <div className="thi_block br bt mt_1 mr_1">
                <div className="block">
                    <div className="title third clear">
                        <span>{BlockTitleTip[2]}</span>
                        <a href="#" onClick={this.BuildEvent}>+</a>
                    </div>
                    <div className="oh">
                        <ul className="list">
                            {eventThirdList.map(function(listeach,Maxnum){
                                return(<div key={Maxnum}>{listeach}</div>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
var FourthBlock = React.createClass({
    BuildEvent:function(){
        this.setState({eventFourthList:eventFourthList.push(<EventEach />)});
    },
    render:function(){
        return(
            <div className="fou_block bt mt_1">
                <div className="block">
                    <div className="title fourth clear">
                        <span>{BlockTitleTip[3]}</span>
                        <a href="#" onClick={this.BuildEvent}>+</a>
                    </div>
                    <div className="oh">
                        <ul className="list">
                            {eventFourthList.map(function(listeach,Maxnum){
                                return(<div key={Maxnum}>{listeach}</div>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
/*side*/
/*var SideBox = React.createClass({
    render:function(){
        return(
            <div className="side">
                <HeadPic />
                <NavList />
            </div>
        )
    }
});*/
var MainBoxViews = [<MainBoxTask />,<MainBoxNote/>,<MainBoxPro/>,<MainBoxPlace/>,<MainBoxTag/>];
var ContentBox = React.createClass({
    render:function(){
        /*{alert(i)}*/
        return(
            <div className="content">
                <div className="wrap">
                    <TopBox />
                    {MainBoxViews[i]}
                </div>
            </div>
        )
    }
});
var MainPage = React.createClass({
    render:function(){
        return (<div>
                    <div className="side">
                        <HeadPic />
                        <NavList />
                    </div>
                    <ContentBox />
               </div>)
    }
});
ReactDOM.render(
    <MainPage />,
    document.getElementById('main')
);






