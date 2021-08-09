import classes from './table.module.css';

export default function TableBody({keys, data, ...props}) {
	return (
		<tbody>
			{
				data.map((item,DataIndex) => {
					return (
						<tr key={DataIndex}>
							{/* For serial number */}
							<td>{DataIndex + 1}</td>
							{
								keys.map((key,keyIndex) => {
									return (
										<td key={keyIndex}>
											{
												key.split('.').length >= 2
												?  key.split('.').reduce( (p,c) => ( ( p && p[c] )|| null ), item) ?? "-"
												: item[key] ?? "-"
											}
										</td>
									)
								})
							}
							<td className={classes.menu_container}>
								-
							</td>
						</tr>
					)
				})
			}
		</tbody>
	)
}