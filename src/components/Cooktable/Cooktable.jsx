

const Cooktable = ({ cooktable  }) => {
    const { recipe_name, calories, preparing_time ,recipe_id} = cooktable;
    return (
        <div className=" mt-5 bg-gray-200 flex justify-around items-center rounded-md">
            <p>{recipe_id}</p>
            <p >{recipe_name.slice(0,14)}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className="btn btn-success">Preparing</button>
        </div>
        // <div className="flex justify-between items-center">
        //     <tr className="text-center">
        //         <th>{recipe_name}</th>
        //         <th> {preparing_time}</th>
        //         <th>{calories}</th>
        //     </tr>
        //     <div>
        //     </div>
        // </div>


    );
};

export default Cooktable;