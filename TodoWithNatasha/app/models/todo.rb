# == Schema Information
#
# Table name: todos
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  body       :string
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord

validates :done, inclusion: { in: [true, false] }
validates :title, presence: true
validates :body, presence: true

end
