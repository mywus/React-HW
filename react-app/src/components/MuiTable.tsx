import {
    TablePagination,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button
} from '@mui/material'

interface Data {
    startDate: string;
    endDate: string;
    customer: string;
    impression: number;
    conversion: number;
    attributeMatches: number;
    conversionRate: number;
    avgFrequency: number;
    avgTimeToConversion: number;
    director: string;
  }

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
    }

  type Order = 'asc' | 'desc';

    function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
    ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
    ) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }
      
      interface HeadCell {
        disablePadding: boolean;
        id: string;
        label: string;
        numeric: boolean;
      }

      const headCells: readonly HeadCell[] = [
        {
          id: 'name',
          numeric: false,
          disablePadding: true,
          label: 'Dessert (100g serving)',
        },
        {
          id: 'calories',
          numeric: true,
          disablePadding: false,
          label: 'Calories',
        },
        {
          id: 'fat',
          numeric: true,
          disablePadding: false,
          label: 'Fat (g)',
        },
        {
          id: 'carbs',
          numeric: true,
          disablePadding: false,
          label: 'Carbs (g)',
        },
        {
          id: 'protein',
          numeric: true,
          disablePadding: false,
          label: 'Protein (g)',
        },
      ];

export const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label='simple table'>
                <TableHead>  
                    <TableRow>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Impression</TableCell>
                        <TableCell>Conversion</TableCell>
                        <TableCell>Attribute Matches</TableCell>
                        <TableCell>Conversion Rate</TableCell>
                        <TableCell>Avg. Frequency</TableCell>
                        <TableCell>Avg. Time To Conversion</TableCell>
                        <TableCell align='center'>Director</TableCell>                        
                    </TableRow>                      
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                           <TableRow
                           key={row.id}
                           sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}
                           >
                            <TableCell>{row.start_date}</TableCell>
                            <TableCell>{row.end_date}</TableCell>
                            <TableCell>{row.customer}</TableCell>
                            <TableCell>{row.impresssion}</TableCell>
                            <TableCell>{row.conversion}</TableCell>
                            <TableCell>{row.attribute_matches}</TableCell>
                            <TableCell>{row.conversion_rate}</TableCell>
                            <TableCell>{row.avg_frequency}</TableCell>
                            <TableCell>{row.avg_time_to_conversion}</TableCell>
                            <TableCell align='center'>{row.director}</TableCell>
                            <TableCell><Button>Create Customer</Button> </TableCell>

                           </TableRow> 
                        ))
                    }                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const rows = [{"id":1,"start_date":"7/3/2023","end_date":"12/23/2022","customer":"Otes","impresssion":3857454,"conversion":3305227,"attribute_matches":5217776,"conversion_rate":3834365,"avg_frequency":6,"avg_time_to_conversion":11382,"director":"Teresita"},
{"id":2,"start_date":"1/9/2023","end_date":"11/7/2022","customer":"Elsworth","impresssion":8244563,"conversion":5880304,"attribute_matches":9901338,"conversion_rate":7924781,"avg_frequency":6,"avg_time_to_conversion":10316,"director":"Kassey"},
{"id":3,"start_date":"7/30/2023","end_date":"5/19/2023","customer":"Mikael","impresssion":2262367,"conversion":4239499,"attribute_matches":4601910,"conversion_rate":5700683,"avg_frequency":5,"avg_time_to_conversion":13957,"director":"Brandea"},
{"id":4,"start_date":"5/20/2023","end_date":"5/8/2023","customer":"Graehme","impresssion":301850,"conversion":9049384,"attribute_matches":2571248,"conversion_rate":5799435,"avg_frequency":3,"avg_time_to_conversion":11900,"director":"Tamar"},
{"id":5,"start_date":"9/14/2022","end_date":"3/17/2023","customer":"Pate","impresssion":9368104,"conversion":167405,"attribute_matches":5786688,"conversion_rate":348256,"avg_frequency":3,"avg_time_to_conversion":10786,"director":"Florida"},
{"id":6,"start_date":"2/9/2023","end_date":"3/2/2023","customer":"Baxie","impresssion":1536819,"conversion":6769151,"attribute_matches":7317483,"conversion_rate":7919192,"avg_frequency":3,"avg_time_to_conversion":11885,"director":"Albina"},
{"id":7,"start_date":"10/24/2022","end_date":"4/13/2023","customer":"Bancroft","impresssion":5895421,"conversion":1166742,"attribute_matches":5309576,"conversion_rate":7418861,"avg_frequency":4,"avg_time_to_conversion":14978,"director":"Marget"},
{"id":8,"start_date":"10/29/2022","end_date":"7/10/2023","customer":"Elnar","impresssion":3512717,"conversion":5615099,"attribute_matches":5336234,"conversion_rate":3461156,"avg_frequency":5,"avg_time_to_conversion":13630,"director":"Libby"},
{"id":9,"start_date":"8/3/2023","end_date":"1/13/2023","customer":"Chance","impresssion":1477926,"conversion":5993046,"attribute_matches":3189396,"conversion_rate":8810294,"avg_frequency":5,"avg_time_to_conversion":10135,"director":"Evey"},
{"id":10,"start_date":"12/29/2022","end_date":"10/1/2022","customer":"Keane","impresssion":135972,"conversion":347141,"attribute_matches":6144563,"conversion_rate":2671866,"avg_frequency":3,"avg_time_to_conversion":12552,"director":"Caralie"},
{"id":11,"start_date":"1/9/2023","end_date":"7/31/2023","customer":"Justino","impresssion":9988374,"conversion":5042182,"attribute_matches":2701690,"conversion_rate":5677317,"avg_frequency":5,"avg_time_to_conversion":10105,"director":"Linnie"},
{"id":12,"start_date":"2/15/2023","end_date":"1/12/2023","customer":"Huntley","impresssion":5793139,"conversion":1488220,"attribute_matches":9120420,"conversion_rate":5351212,"avg_frequency":6,"avg_time_to_conversion":14156,"director":"Vivianne"},
{"id":13,"start_date":"6/26/2023","end_date":"9/17/2022","customer":"Had","impresssion":4492794,"conversion":1283524,"attribute_matches":8056859,"conversion_rate":2839824,"avg_frequency":6,"avg_time_to_conversion":13870,"director":"Kassey"},
{"id":14,"start_date":"8/1/2023","end_date":"1/18/2023","customer":"Aleksandr","impresssion":4840456,"conversion":8571260,"attribute_matches":8715954,"conversion_rate":1513164,"avg_frequency":4,"avg_time_to_conversion":10158,"director":"Millie"},
{"id":15,"start_date":"11/27/2022","end_date":"7/8/2023","customer":"Rufe","impresssion":3981795,"conversion":6917322,"attribute_matches":3881904,"conversion_rate":3426820,"avg_frequency":4,"avg_time_to_conversion":11701,"director":"Gilberta"}]