# repeat the letters in the string n times 
def repeatedString(s, n)
	aCounter = 0
	lettersCounted = 0
	placeInString = 0;
	#break letters into an array
	arr = s.split("");


	#while letters coutned is less than n
	while lettersCounted < n do
		puts arr[placeInString];

		#if letter is 'a' counter +1
		if arr[placeInString] == 'a' then
			aCounter = aCounter+1;
		end
		#if we're on the last letter
		if placeInString == arr.length-1 then 
			placeInString = 0;
		else 
			placeInString = placeInString+1;
		end
		lettersCounted = lettersCounted+1
	end

	aCounter;
end

puts repeatedString('ab', 100);