import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { userSliceSelectors } from "../../../store/redux/users/usersSlice"
import { useAppSelector } from "../../../store/hooks"
import { v4 } from "uuid";

function Users() {
  const userData = useAppSelector(userSliceSelectors.users);
  console.log(userData);
  
 const userCards = userData.map((user) => {
  return(
    <UserCard key={v4()}>
      <Paragraph>Name: {user.userName}</Paragraph>
      <Paragraph>Age: {user.age}</Paragraph>
      <Paragraph>Job Title: {user.jobTitle}</Paragraph>
    </UserCard>
  )
 })

  return (
    <UsersPageWrapper>
       {userCards}
    </UsersPageWrapper>
  )
}

export default Users
