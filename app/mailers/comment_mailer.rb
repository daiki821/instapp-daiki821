class CommentMailer < ApplicationMailer
  def reply(user, reply_user)
    @user = user
    @reply_user = reply_user
    mail to: 'user.email', subject: 'コメントが来ています' 
  end
end 