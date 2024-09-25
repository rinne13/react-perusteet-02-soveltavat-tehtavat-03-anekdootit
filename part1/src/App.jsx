import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [showTable, setShowTable] = useState(false)

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  const toggleTableVisibility = () => {
    setShowTable(!showTable)
  }

  return (
    <div>
      <h1>Current Anecdote</h1>
      <div>
        <div>{anecdotes[selected]}</div>
        <div>has {votes[selected]} votes</div>
        <button onClick={handleVoteClick}  style={{ marginTop: '2rem' }}>Vote</button>
        <button onClick={handleNextClick}>Next anecdote</button>
      </div>

      <div>
        <h2>Anecdote with most votes</h2>
        <div>{anecdotes[mostVotesIndex]}</div>
        <div>has {votes[mostVotesIndex]} votes</div>
      </div>

<div>
    
      <button onClick={toggleTableVisibility}  style={{ marginTop: '2rem' }}>
        {showTable ? 'Hide Result of Anecdotes' : 'Show Result of Anecdotes'}
      </button>

     
      {showTable && (
        <div>
          <h3>Programming Anecdotes</h3>
          <table>
            <thead>
              <tr>
                <th>Anecdote</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {anecdotes.map((anecdote, index) => (
                <tr key={index}>
                  <td>{anecdote}</td>
                  <td>{votes[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  )
}

export default App
