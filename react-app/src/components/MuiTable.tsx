import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'

export const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>  
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>                      
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => (
                           <TableRow
                           key={row.id}
                           sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}
                           >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                           </TableRow> 
                        ))
                    }                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{"id":1,"first_name":"Karlens","last_name":"Benoy","email":"kbenoy0@yelp.com","gender":"Male","ip_address":"197.232.100.123"},
{"id":2,"first_name":"Michell","last_name":"Osan","email":"mosan1@tripod.com","gender":"Female","ip_address":"139.136.193.174"},
{"id":3,"first_name":"Clayton","last_name":"Marielle","email":"cmarielle2@archive.org","gender":"Agender","ip_address":"165.202.192.231"},
{"id":4,"first_name":"Jourdain","last_name":"Ballay","email":"jballay3@sourceforge.net","gender":"Male","ip_address":"81.138.56.140"},
{"id":5,"first_name":"Sonni","last_name":"Lapthorn","email":"slapthorn4@odnoklassniki.ru","gender":"Genderqueer","ip_address":"60.109.167.249"},
{"id":6,"first_name":"Nicol","last_name":"Brangan","email":"nbrangan5@ucla.edu","gender":"Female","ip_address":"194.74.226.26"},
{"id":7,"first_name":"Shaine","last_name":"Cannings","email":"scannings6@weather.com","gender":"Female","ip_address":"62.92.250.152"},
{"id":8,"first_name":"Pebrook","last_name":"Nacey","email":"pnacey7@aboutads.info","gender":"Male","ip_address":"35.124.54.6"},
{"id":9,"first_name":"Cheryl","last_name":"Hannibal","email":"channibal8@ehow.com","gender":"Female","ip_address":"53.210.90.54"},
{"id":10,"first_name":"Naoma","last_name":"Arch","email":"narch9@lycos.com","gender":"Female","ip_address":"31.211.172.1"}]