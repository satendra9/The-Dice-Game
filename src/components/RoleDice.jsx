import styled  from 'styled-components'

const RoleDice = ({roleDice, currentDice}) => {

  return (

    <DiceContainer>
    <div className='Dice' onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt='dice 1'/>
    </div>
    <p>Click on to dice roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    align-items: center;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
`

