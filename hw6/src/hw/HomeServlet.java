package hw;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


/**
 * Servlet implementation class HomeServlet
 */
@WebServlet("/HomeServlet")
public class HomeServlet extends HttpServlet implements Servlet {
	public int k=0;

	public String[]login = new String[100];
	public String[]password = new String[100];
	public String[]sex = new String[100];
	public String[]subscribtion = new String[100];
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // получение данных отправленных пользователем
    	
    	while(k>-1) {
        login[k] = req.getParameter("login");
        password[k] = req.getParameter("password");
        sex[k] = req.getParameter("sex");
        try {
        String[]tmp = req.getParameterValues("subscribtion");
        subscribtion[k]=tmp[0];
        }
        catch(NullPointerException e){
        	subscribtion[k]="off";
        }
        k++;
        break;
    	}        
        PrintWriter writer = resp.getWriter();
        writer.println("<table>");
        writer.println("<thead>");
        writer.println("<tr>");
        writer.println("<th> number </th>");
        writer.println("<th> login </th>");
        writer.println("<th> password </th>");
        writer.println("<th> sex </th>");
        writer.println("<th> subsribtion </th>");
        writer.println("</tr>");
        writer.println("</thead>");
        writer.println("<tbody>");
        for(int i =0; i<k; i++) {
        writer.println("<tr>");
        writer.println("<td>"+ i+"</td>");
        writer.println("<td>" + login[i] + "</td>");
        writer.println("<td>" + password[i] + "</td>");
        writer.println("<td>"+ sex[i] +"</td>");
        writer.println("<td>"+ subscribtion[i] +"</td>");
        writer.println("</tr>");
        }
        writer.println("</tbody>");
        writer.println("</table>");
        writer.println("<a href=\"index.html\">Back</a>");        
    }
    
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
