import React from 'react'
import Container from '@material-ui/core/Container';
import PaginationItem from '@material-ui/lab/PaginationItem';

const Paginating = ({postsPerPage,totalPosts, paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
            <Container fixed style={{ paddingTop: '10px',
            paddingBottom: '50px', backgroundColor: 'white'}}>

           
                {pageNumbers.map(number=>(
                    

                        
                        <PaginationItem page={number} size="large" shape="rounded" count={number} variant="outlined" key={number} color="secondary" onClick={() => paginate(number)} href={'#'+number}>{number}</PaginationItem>
                   
                ))}
            
            </Container>

        
    )
}
export default Paginating