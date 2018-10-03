10.times do |i|
  Todo.create!(
    title: "Task#{i}",
    body: "#{i}#{i}#{i}",
    done: false
  )
end
print "10 tasks created!"
