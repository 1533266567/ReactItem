import React from 'react';
import ReactDOM from 'react-dom';

import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    Swiper,
    FlexItem,
    Flex
} from 'react-weui';


class InfiniteDemo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: [...Array(40).keys()]
        }
    }

    render(){
        return (
            <div>
                <Swiper
                    height={150}
                >
                    <div style={{ padding: '5px', boxSizing: 'border-box', textAlign: 'center' }}>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                    </div>
                    <div style={{ background: '#39CCCC' }} />
                    <div style={{ background: '#0074D9' }} />
                </Swiper>
                <InfiniteLoader
                    onLoadMore={ (resolve, finish) => {
                        //mock request
                        setTimeout( ()=> {
                            if(this.state.items.length > 10000000){
                                  finish()
                            }else{
                                this.setState({
                                    items: this.state.items.concat([this.state.items.length])
                                }, ()=> resolve())
                            }
                        }, 1000)
                    }}
                >
                <div>
                    <Cells>
                        {
                            this.state.items.map( (item, i) => {
                                return (
                                    <Cell href="javascript:;" key={i} access>
                                        <CellBody>
                                            {item}
                                        </CellBody>
                                        <CellFooter/>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>
                </div>
               {/* <Page className="infinite" title="Infinite Loader" subTitle="滚动加载" >

                        <CellsTitle>List with 22 Max</CellsTitle>
                        <Cells>
                        {
                            this.state.items.map( (item, i) => {
                                return (
                                    <Cell href="javascript:;" key={i} access>
                                        <CellBody>
                                            {item}
                                        </CellBody>
                                        <CellFooter/>
                                    </Cell>
                                )
                            })
                        }
                        </Cells>

                </Page>*/}
                </InfiniteLoader>
            </div>
        )
    }
}

export default InfiniteDemo;