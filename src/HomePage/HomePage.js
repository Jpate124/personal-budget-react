import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

class HomePage extends Component {
    state = {
        data: {
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#8E44AD', 
                        '#2C3E50',
                        '#DAF7A6',
                        '##FFC300',
                        '#FF5733',
                        '#C70039',
                        '#900C3F',
                        '#581845'
                    ],
                }
            ],
            labels: []
        
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/budget');
        console.log(res.data);
        let temp = this.state.data;
        for(let i=0;i<res.data.myBudget.length;i++){
            temp.datasets[0].data[i] = res.data.myBudget[i].budget;
            temp.labels[i] = res.data.myBudget[i].title;
            
        }
        this.setState({
            data: Object.assign({},this.state.data, {
                data: temp
            })
        });
    }

    render() {
        return(
            <div>
                 <main className="container center">

                <main className="page-area">
                    <article>                
                        <h1>Stay on track</h1> 
                        <p>
                            Do you know where you are your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </article>

                    <article>
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                        </p>
                    </article>

                    <article>
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                        </p>
                    </article>

                    <article>
                        <h1>Free</h1>
                        <p>
                            This app is free!!! And you are the only one holding your data!
                        </p>
                    </article>

                    <article>
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </article>

                    <article>
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                        </p>
                    </article>

                    <article>
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                        </p>
                    </article>

                    <article>
                        <h1>Chart</h1>
                        <div>
                            <Pie data={this.state.data} width={400} height={400}/>
                        </div>
                    </article>

                </main>

                </main>

            </div>
        )
    }
}

export default HomePage;