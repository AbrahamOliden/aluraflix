import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Table() {
    const { categories } = useContext(GlobalContext);

    return (
        <table align="center" border="1" style={{ width: "100%" }} >
            <thead>
                <tr>
                    <th scope="col" >Name</th>
                    <th scope="col" >Description</th>
                    <th scope="col" >Edit</th>
                    <th scope="col" >Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map(category => (
                        <tr key={category.title} >
                            <th scope="row" >{category.title}</th>
                            <td>{category.description}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Table;