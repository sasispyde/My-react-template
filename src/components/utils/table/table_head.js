import classes from './table.module.css';

export default function TableHead(props) {

	if(!props.headings) return null;

	return (
		<thead classes={classes.headers}>
			<tr>
				<th>{"S.No"}</th>
				{
					props.headings.map((heading,index) => {
						return <th key={index}>{heading}</th>
					})
				}
				<th>{"Actions"}</th>
			</tr>
		</thead>
	)
}