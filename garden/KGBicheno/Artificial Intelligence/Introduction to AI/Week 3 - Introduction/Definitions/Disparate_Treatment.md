### disparate treatment

Go back to the [[AI Glossary]]

#fairness

Factoring subjects' sensitive attributes into an algorithmic decision-making process such that different subgroups of people are treated differently.

For example, consider an algorithm that determines Lilliputians’ eligibility for a miniature-home loan based on the data they provide in their loan application. If the algorithm uses a Lilliputian’s affiliation as Big-Endian or Little-Endian as an input, it is enacting disparate treatment along that dimension.

Contrast with disparate impact, which focuses on disparities in the societal impacts of algorithmic decisions on subgroups, irrespective of whether those subgroups are inputs to the model.
Warning: Because sensitive attributes are almost always correlated with other features the data may have, explicitly removing sensitive attribute information does not guarantee that subgroups will be treated equally. For example, removing sensitive demographic attributes from a training data set that still includes postal code as a feature may address disparate treatment of subgroups, but there still might be disparate impact upon these groups because postal code might serve as a proxy for other demographic information.

