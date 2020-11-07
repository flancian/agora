### equality of opportunity

Go back to the [[AI Glossary]]

#fairness
A fairness metric that checks whether, for a preferred label (one that confers an advantage or benefit to a person) and a given attribute, a classifier predicts that preferred label equally well for all values of that attribute. In other words, equality of opportunity measures whether the people who should qualify for an opportunity are equally likely to do so regardless of their group membership.

For example, suppose Glubbdubdrib University admits both Lilliputians and Brobdingnagians to a rigorous mathematics program. Lilliputians’ secondary schools offer a robust curriculum of math classes, and the vast majority of students are qualified for the university program. Brobdingnagians’ secondary schools don’t offer math classes at all, and as a result, far fewer of their students are qualified. Equality of opportunity is satisfied for the preferred label of "admitted" with respect to nationality (Lilliputian or Brobdingnagian) if qualified students are equally likely to be admitted irrespective of whether they're a Lilliputian or a Brobdingnagian.

For example, let's say 100 Lilliputians and 100 Brobdingnagians apply to Glubbdubdrib University, and admissions decisions are made as follows:

Table 1. Lilliputian applicants (90% are qualified)

|		                                      |	Qualified	|	Unqualified	|
|	-----------------------	|	-----------------------	|	-----------------------	|
|	Admitted	|	45	|	3	|
|	Rejected	|	45	|	7	|
|	Total	|	90	|	10	|


Percentage of qualified students admitted: 45/90 = 50%
Percentage of unqualified students rejected: 7/10 = 70%
Total percentage of Lilliputian students admitted: (45+3)/100 = 48%

Table 2. Brobdingnagian applicants (10% are qualified):

|		                                      |	Qualified	|	Unqualified	|
|	-----------------------	|	-----------------------	|	-----------------------	|
|	Admitted	|	5	|	9	|
|	Rejected	|	5	|	81	|
|	Total	|	10	|	90	|


Percentage of qualified students admitted: 5/10 = 50%
Percentage of unqualified students rejected: 81/90 = 90%
Total percentage of Brobdingnagian students admitted: (5+9)/100 = 14%

The preceding examples satisfy equality of opportunity for acceptance of qualified students because qualified Lilliputians and Brobdingnagians both have a 50% chance of being admitted.
Note: While equality of opportunity is satisfied, the following two fairness metrics are not satisfied:

    demographic parity: Lilliputians and Brobdingnagians are admitted to the university at different rates; 48% of Lilliputians students are admitted, but only 14% of Brobdingnagian students are admitted.
    
	equalized odds: While qualified Lilliputian and Brobdingnagian students both have the same chance of being admitted, the additional constraint that unqualified Lilliputians and Brobdingnagians both have the same chance of being rejected is not satisfied. Unqualified Lilliputians have a 70% rejection rate, whereas unqualified Brobdingnagians have a 90% rejection rate.

See "Equality of Opportunity in Supervised Learning" for a more detailed discussion of equality of opportunity. Also see "Attacking discrimination with smarter machine learning" for a visualization exploring the tradeoffs when optimizing for equality of opportunity.

