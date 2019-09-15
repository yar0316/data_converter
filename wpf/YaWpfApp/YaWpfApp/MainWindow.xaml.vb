Imports System.Text.RegularExpressions

Class MainWindow
    Private this As Object



    Private Sub CopyClip_Click(sender As Object, e As RoutedEventArgs) Handles copyClip.Click
        My.Computer.Clipboard.SetText(outputBox.Text)
        MsgBox("コピーしました。")
    End Sub

    Private Sub ExecConvert_Click(sender As Object, e As RoutedEventArgs) Handles execConvert.Click
        Dim input As String() = inputBox.Text.Split("\n")
        Dim out As String = ""
        Dim tmp As String

        For Each element In input
            tmp = element.Replace(" ", "").Replace(vbCrLf, ",")
            Console.WriteLine(tmp)
            out = out & tmp
        Next
        out = out.Remove(out.Length - 1, 1)
        outputBox.Text = out
        outputBox.Focus()
    End Sub
End Class
