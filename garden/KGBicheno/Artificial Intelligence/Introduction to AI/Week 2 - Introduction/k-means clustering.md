# k-means clustering

Go to [[Week 2 - Introduction]] or back to the [[Main AI Page]]

Group examples from a data set into groups. 

- First, find a way to turn the examples into a vector
- Second, use euclidian maths to find groups depending on those vectors' distance from central points 
	- like lines of best fit but points of best fit if you scatter-plot the examples
	- note that sometimes there will be overlap among examples (roses video example)

![A graphical representation of k-means clustering](https://i.imgur.com/cPRdnjV.png)

# Psuedo-code time!

#ToDo **Read up on k-means and k-median clustering and research it all in more depth before trying again with the psuedocode. The below procedure is dramatically over-simplified.**

The k-means algorithm is extremely simple to understand and implement. You begin by randomly assigning each example from the data set into a cluster, calculate the centroid of the clusters as the mean of all member examples, then iterate the data set to determine whether an example is closer to the member cluster or the alternate cluster . If the member is closer to the alternate cluster, the example is moved to the new cluster and its centroid recalculated. This process continues until no example moves to the alternate cluster.

**The k-value is the number of clusters**

#ToDo Research how to code k-means clustering properly.

For language reference, check out the [[Python - Main Page]]

	# have a list of 30 vectors (x,y points) to plot
	dataset = [[4 , 25], [20 , 22], [19 , 17], [8 , 8], [28 , 2], [9 , 17], [3 , 18], [8 , 1], [5 , 13], [21 , 19], [30 , 12], [18 , 29], [4 , 26], [15 , 5], [14 , 26], [18 , 3], [22 , 27], [15 , 20], [9 , 19], [2 , 30], [28 , 14], [15 , 19], [2 , 9], [26 , 8], [23 , 19], [28 , 4], [28 , 28], [3 , 10], [11 , 12]]
	
	# have a list of 3 clusters to which they can be assigned, represented by dictionaries with a label and a vector
	vectormap = [{"red" : [{"vector" : [8, 6]} {"members" :[]}]}, {"green" : [{"vector" : [20, 1]} {"members" :[]}]}, {"blue" : [{"vector" : [5, 5]} {"members" :[]}]}]
	
	# have a function that randomly assigns each listitem in the dataset to one of the clusters
	def cluster_func(dataset):
		for vector in dataset:
			clusterhome = get random number 0-2
			vectormap[clusterhome].get('members').append(vector)
		return vectormap
			
	# have a function that finds a vector's closest cluster. Will probably have to make sure that dataset includes label so it's able to keep track of each vector.
	def sub_vector(args*) # first vector is data vector, remaining are clusters
		closest vector = ""
		for vectors in args:
			if vector index = 0:
				break
			else:
				if (vector[0] - vector) < closest vector:
				closest vector = vector
		return closest vector
	
	#have a function that iterates through all of a cluster's vectors and moves their vectors to the closest vector
	def cluster_rehome(cluster):
		for member in cluster:
			vectormap[members].append(sub_vector())
		return vectormap
	
	#have a function that checks if the distance of all vectors from their clusters is the closest of all three
	def cluster_checker(vectormap)
		rehome_needed = False
		#IFUCKEDUP loop over clusters and build a list of distances
		for cluster in vectormap:
			for member in cluster:
				if (cluster.vector - member.vector) > distances in list of distances:
					rehome_needed = True
		return rehome_needed
	
	#have a main function that handles the main loop
	def main(dataset, vectormap):
		cluster_func(dataset)
		for vector in dataset:
			sub_vector(vector, vectormap[0].get('vector'), vectormap[1].get('vector'), vectormap[2].get('vector'))
		for cluster in vectormap:
			vectormap = cluster_rehome(cluster)
		if cluster_checker(vector_map):
			while cluster_checker(vector_map):
				for cluster in vector_map:
					cluster_rehome(cluster)
		plot vectormap with clusters and members
		