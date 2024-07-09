import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styled from "styled-components";

const StyledTable = styled.table`
    table-layout: fixed;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    border-collapse: collapse;
    border: 4px solid var(--blue);
`;

const StyledTableHead = styled.thead`
    font-size: 1.4rem;
    font-weight: 500;
    tr {
        th {
            padding: 10px 0;
        }
        #description {
            width: 50%;
        };
        #edit, #delete {
            width: 10%;
        }
    }
`;

const TableButton = styled.button`
    width: 100%;
    margin: 0;
    padding: 12px 20px;
    border: none;
    background-color: transparent;
    color: var(--white);
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
`;

const CategoryDescription = styled.td`
    font-size: 1rem;
    font-weight: 400;
`;

function Table() {
    const { categories } = useContext(GlobalContext);

    return (
        <StyledTable align="center" border="1" >
            <StyledTableHead>
                <tr>
                    <th scope="col" id="name" >Name</th>
                    <th scope="col" id="description" >Description</th>
                    <th scope="col" id="edit" >Edit</th>
                    <th scope="col" id="delete" >Delete</th>
                </tr>
            </StyledTableHead>
            <tbody>
                {
                    categories.map(category => (
                        <tr key={category.title} >
                            <th scope="row" >{category.title}</th>
                            <CategoryDescription>{category.description}</CategoryDescription>
                            <td>
                                <TableButton>Edit</TableButton>
                            </td>
                            <td>
                                <TableButton>Delete</TableButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </StyledTable>
    );
};

export default Table;