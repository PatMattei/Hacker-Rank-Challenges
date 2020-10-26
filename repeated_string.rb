# repeat the letters in the string n times 
def repeatedString(s, n)
	#break letters into an array
	arr = s.split("")
	
	#get hash of letter frequency
	counts = Hash.new 0
	arr.each do |letter|
  		counts[letter] += 1
	end

	
	if counts['a'] == 0 || counts ['a'] == nil then 
		#if there are no 'a's
		0
	elsif n % s.length == 0 then 
		#if the length of string goes into n evenly, then the string is repated that many times easily
		counts['a'] * (n/s.length)
	else
		#get closest whole number
		aCount = counts['a'] * (n/s.length)
		remainingChars = n - ((n/s.length) * s.length)
		
		#iterate through string arr for number of remainingChars
		for i in 1..remainingChars
			if arr[i-1] == 'a' then
				aCount += 1
			end
		end
		aCount
	end
end

puts repeatedString('aba', 9000000000000000);