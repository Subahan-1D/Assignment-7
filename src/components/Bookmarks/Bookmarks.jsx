import Cooktable from "../Cooktable/Cooktable";

const Bookmarks = ({ cook, }) => {
    return (

        <div className="border-2 mt-5 rounded-md col-span-4">
            <h2 className="text-center ">Want to Cook table : {cook.length} </h2>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="">Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div className="">
                <table className="table">
                    <thead>
                       
                        {
                            cook.map(cooktabel => <Cooktable key={cook.id} cooktable={cooktabel}></Cooktable>)
                        }

                        <div></div>
                    </thead>

                </table>
            </div>




        </div>

    );
};

export default Bookmarks;


