import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { CustomPagination } from './CustomPagination';
import ConfirmationDialog from '../form/ConfirmationDialogue';
import './TeamDataGrid.css'

const styles = {
    color: 'black',
    width: '100%',
    height: '100%',
}

const TeamDataGrid = ({ handleEdit, handleDelete }) => {
    // Sample data (replace this with your actual data)
    const rows = [
        { id: 1, teamName: 'Team A', creator: 'John Doe' },
        { id: 2, teamName: 'Team B', creator: 'Jane Smith' },
        { id: 3, teamName: 'Team C', creator: 'Bob Johnson' },
        // Add more rows as needed
    ];

    // Define the columns
    const columns = [
        { field: 'teamName', headerName: 'Team Name', flex: 1, headerClassName: "primary-bgd" },
        // { field: 'creator', headerName: 'Creator', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 0.5,
            sortable: false,
            headerClassName: "primary-bgd",
            renderCell: (params) => {
                return (
                    <>
                        <IconButton
                            variant="outlined"
                            size="small"
                            onClick={handleEdit}
                        >
                            <OpenInNewRoundedIcon />
                        </IconButton>

                        <IconButton
                            variant="outlined"
                            size="small"
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </>
                );
            },
        },
    ];

    return (
        <div style={{ height: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                sx={styles}
                className='dark-bgd fade2-txt'
                slots={{
                    pagination: CustomPagination,
                }}
            />
        </div >
    );
};

export default TeamDataGrid;
