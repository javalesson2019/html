package hw;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HomeServlet
 */
@WebServlet("/HomeServlet")
public class HomeServlet extends HttpServlet implements Servlet {
	public int k=0;
    public static final String LOGIN = "admin";
    public static final String PASSWORD = "123";
	public ArrayList <String> login = new ArrayList<>();
	public ArrayList <String> password = new ArrayList<>();
	public ArrayList <String> sex = new ArrayList<>();
	public ArrayList <String> subscribtion = new ArrayList<>();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	while(k>-1) {
        login.add(req.getParameter("login"));
        password.add(req.getParameter("password"));
        sex.add(req.getParameter("sex"));
        try {
        String[]tmp = req.getParameterValues("subscribtion");
        subscribtion.add(tmp[0]);
        }
        catch(NullPointerException e){
        	subscribtion.add("off");
        }

        k++;
        
        break;
    	}
    	PrintWriter writer = resp.getWriter();
    	if(validData(login.get(k-1), password.get(k-1))) {
        writer.println("<table><thead><tr>");
        writer.println("<th> number </th>");
        writer.println("<th> login </th>");
        writer.println("<th> password </th>");
        writer.println("<th> sex </th>");
        writer.println("<th> subsribtion </th>");
        writer.println("</tr></thead>");
        writer.println("<tbody>");
        for(int i =0; i<k; i++) {
        writer.println("<tr>");
        writer.println("<td>"+ i+"</td>");
        writer.println("<td>" + login.get(i) + "</td>");
        writer.println("<td>" + password.get(i) + "</td>");
        writer.println("<td>"+ sex.get(i) +"</td>");
        writer.println("<td>"+ subscribtion.get(i) +"</td>");
        writer.println("</tr>");
        }
        writer.println("</tbody></table>");   
    	}else {
    		writer.println("<h1>Thank you for the registration.</h1>");
    		writer.println("<p style='color:grey'>To see info about other registrated users you should be admin</p> ");
    		writer.println("<p style='color:#EFE6E6'>login: admin, password: 123</p> ");
    	}
    	writer.println("<a href=\"index.html\">Back</a>"); 
    	
    }
    
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	private boolean validData(String login, String password) {
        return LOGIN.equals(login) && PASSWORD.equals(password);
    }
}
