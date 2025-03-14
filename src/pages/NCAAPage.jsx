import DonutChart from '../components/NCAA/DonutChart';  
const NCAAPage = () => {    

    return (
        <div  className="w3-black">
                 <div className="container px-1 justify-content-center align-items-center"> 
                <div
                  className=" text-center"
                  style={{ 
                    paddingTop: "4rem", 
                    paddingBottom: "4rem" 
                }}
                >
                
                  <div className="mb-5">
                    <h1><b>NCAA Funding Overview (2022-23)</b></h1>
                    <div className="container d-flex justify-content-center align-items-center">
                 <div className="card" 
                 style={{
                width: '18rem', 
                 boxShadow: '2px 4px 8px', 
                    borderRadius: '150px',
                    height:'18rem',
                    }}>  
                   
                        <div className=" p-3">
                        <p>NCAA REVENUE</p>
                        <h1><b>$1.28 BILLION</b></h1>
                        </div>
                  
                    </div>
                    </div>
                    </div>
                    <div className="mb-5">
                    <div className="container justify-content-center align-items-center">
                        <h1 className="mb-3"><b>MISCONCEPTION: THE MONEY GOES TO THE ATHLETES.</b></h1>
                    <h2>Why the Misconception Persists</h2>
                    <p>High-profile NIL deals and the upcoming revenue-sharing model fuel the myth and media focus on the top 1% amplifies it, while the NCAA’s $1.3 billion revenue figure sounds like it could pay athletes handsomely. But the reality is structural: the NCAA and schools prioritize program sustainability—think $194 million to conferences in 2015, or $842 million annually for operations and scholarships—over athlete payouts. Football and basketball are cash cows, but their profits prop up the system, not the players’ bank accounts.</p>         
                 </div>
                  </div>
                  <div>

                  <div className="mb-5">
                  <div className="container justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>DIVISION I</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>DIVISION II</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>DIVISION III</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="px-3">
                <div className="container justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>DEI</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>OPERATIONS</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col">
                        <div className="mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <p>SALLERIES</p>
                                <h1><b>1.28 Billion</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            <DonutChart />
        </div>
    )
}   

export default NCAAPage;