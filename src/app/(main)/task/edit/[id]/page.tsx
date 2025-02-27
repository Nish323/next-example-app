const TaskEditIdPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  console.log(params);
  return (
    <div>
      { params.id }
    </div>
  )
}

export default TaskEditIdPage
