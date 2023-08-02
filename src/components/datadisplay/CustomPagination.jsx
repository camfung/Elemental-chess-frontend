import React from 'react';
import IconButton from '@mui/material/IconButton';
import FirstPage from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPage from '@mui/icons-material/LastPage';

export function CustomPagination(props) {
    const { pagination, onPageChange } = props;

    const handleFirstPageButtonClick = () => {
        // onPageChange(0);
    };

    const handleBackButtonClick = () => {
        // onPageChange(pagination.page - 1);
    };

    const handleNextButtonClick = () => {
        // onPageChange(pagination.page + 1);
    };

    const handleLastPageButtonClick = () => {
        // onPageChange(Math.max(0, Math.ceil(pagination.rowCount / pagination.pageSize) - 1));
    };

    return (
        <>
            <IconButton
                onClick={handleFirstPageButtonClick}
                // disabled={pagination.page === 0}
                aria-label="first page"
            >
                <FirstPage />
            </IconButton>
            <IconButton onClick={handleBackButtonClick} aria-label="previous page">{/*disabled={!pagination.hasPreviousPage*/}
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton onClick={handleNextButtonClick} aria-label="next page">{/*disabled={!pagination.hasNextPage}*/}
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                // disabled={pagination.page >= Math.ceil(pagination.rowCount / pagination.pageSize) - 1}
                aria-label="last page"
            >
                <LastPage />
            </IconButton>
        </>
    );
}

