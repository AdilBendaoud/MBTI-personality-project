import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Catalogue = () => {
    const [testList, setTestList] = useState([]);
    
    const getTests = async()=>{
        try {
            const response = await axios.get('http://localhost:8888/api/test/list');
            setTestList(response.data.result);
        } catch (error) {
            console.log("Error: ",error);
        }
    }

    useEffect(()=>{
        getTests()
    },[])


    return(
        <main style={{minHeight:'100vh',marginTop:80}}>
            <section className="py-5 text-center container">
                <div className="row py-lg-4">
                    <div className="col-lg-8 col-md-8 mx-auto">
                        <h1>Test List</h1>
                        <p>Welcome to our Test List page, where you can explore a range of assessments designed to uncover valuable insights about yourself. Our tests cover various aspects, from personality traits and strengths to career preferences and academic inclinations.</p>
                    </div>
                </div>
            </section>

            <div className="album bg-body-tertiary py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {testList.map(test =><Card title={test.nom} text={test.description} id={test._id}/>)}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Catalogue;