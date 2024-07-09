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
            padding: 12px 20px;
        };
        #name {
            text-align: left;
        };
        #description {
            width: 50%;
        };
        #edit, #delete {
            width: 10%;
        };
    };
`;

const CategoryTitle = styled.th`
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
    padding: 12px 20px;
`

const CategoryDescription = styled.td`
    font-size: 1.1rem;
    font-weight: 400;
    text-align: left;
    padding: 12px 20px;
`;

const TableButton = styled.button`
    width: 100%;
    margin: auto;
    padding: 12px 20px ;
    border: none;
    background-color: transparent;
    color: var(--white);
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    box-sizing: border-box;
    transition: transform 0.5 ease;
    &:hover {
        background-color: rgba(34, 113, 209, 0.7);
        color: var(--black);
        font-weight: 600;
    };
    &:focus {
        transform: scale(1.05);
        border: 5px solid var(--blue);
        box-shadow: 0 0 5px 5px rgba(34, 113, 209, 0.7);
        color: var(--blue);
        font-weight: 600;
    }
    &:active {
        background-color: var(--blue);
        color: var(--white);
        font-weight: 600;
    }
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
                            <CategoryTitle scope="row" >{category.title}</CategoryTitle>
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