const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      {children}
    </div>
  )
}

export default TaskLayout
