package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class Citas_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<div id=\"Citas\" class=\"tab-pane fade\">\n");
      out.write("    <div class=\"row\">\n");
      out.write("        <div class=\"col-md-12\">\n");
      out.write("            <h3 class=\"text-center\" id=\"titutloCitas\">\n");
      out.write("\t\tFormulario de creación de citas\n");
      out.write("\t    </h3>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("    <div class=\"container\">\n");
      out.write("                         <!---alert alert-success  --->\n");
      out.write("                         <div class=\"noVisible\" id=\"_successCitas\">\n");
      out.write("                           <strong>Success!</strong> \n");
      out.write("                         </div>\n");
      out.write("                          <!---alert alert-info\"  --->\n");
      out.write("                         <div class=\"noVisible\" id=\"_infoCitas\">\n");
      out.write("                           <strong>Info!</strong> \n");
      out.write("                         </div>\n");
      out.write("                           <!---alert alert-warning  --->\n");
      out.write("                         <div class=\"noVisible\" id=\"_warningCitas\">\n");
      out.write("                           <strong>Warning!</strong> \n");
      out.write("                         </div>\n");
      out.write("                            <!---alert alert-danger --->\n");
      out.write("                         <div class=\"noVisible\" id=\"_dangerCitas\">\n");
      out.write("                           <strong>Danger!</strong>\n");
      out.write("                         </div>\n");
      out.write("                       </div>\n");
      out.write("    <div class=\"row\">\n");
      out.write("\t<div class=\"col-md-6\">\n");
      out.write("            <form class=\"in-line \" role=\"form\">\n");
      out.write("                <div class=\"form-group\">\n");
      out.write("                    <label><especificacion>*</especificacion><small>Campos obligatorios</small></label>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"form-group\">\n");
      out.write("                    <label for=\"CTexto\">Identificación del cliente<obligatorio>*</obligatorio></label>\n");
      out.write("                    <input type =\"text\" name=\"CTexto\" class=\"form-control\" id = \"clienteCita\"> \n");
      out.write("                </div>\n");
      out.write("                <div class=\"form-group\">\n");
      out.write("                    <label for=\"CTexto\">Motocicleta<obligatorio>*</obligatorio></label>\n");
      out.write("                    <select id=\"motocito\"class=\"form-control\" >\n");
      out.write("                        <option value=\"-1\">Ingrese la indentificación del cliente</option>\n");
      out.write("                    </select>\n");
      out.write("                </div>\n");
      out.write("                \n");
      out.write("                <table>\n");
      out.write("                    <tr>\n");
      out.write("                        <th>\n");
      out.write("                                             <label for=\"CTexto\">Recibir notificaciones por correo:</label>\n");
      out.write("\n");
      out.write("                        </th>\n");
      out.write("                         <th></th>\n");
      out.write("                    </tr>\n");
      out.write("                </table>\n");
      out.write("                \n");
      out.write("                \n");
      out.write("                <div class=\"onoffswitch\">\n");
      out.write("                    <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" checked>\n");
      out.write("                        <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n");
      out.write("                            <span class=\"onoffswitch-inner\"></span>\n");
      out.write("                            <span class=\"onoffswitch-switch\"></span>\n");
      out.write("                        </label>\n");
      out.write("                </div>\n");
      out.write("            </form>\t\n");
      out.write("        </div>\n");
      out.write("        <div class=\"col-md-6\">\n");
      out.write("            <form class=\"in-line\" role=\"form\">\n");
      out.write("                <br/><br/>\n");
      out.write("                 <div class=\"form-group\">\n");
      out.write("                        <label>Fecha de la cita<obligatorio>*</obligatorio></label><br/>\n");
      out.write("                        <GROUP>        \n");
      out.write("                            <select name=\"mes\" id=\"_mesCitas\"><option value=\"-1\">MES</option></select>\n");
      out.write("                            <select name=\"dia\" id=\"_diaCitas\"><option value=\"-1\" ></option></select>\n");
      out.write("                            <input type=\"text\"  maxlength=4  name=\"anno\" placeholder=\"ej: 1994\" id=\"annoCitas\">\n");
      out.write("                        </GROUP>\n");
      out.write("                </div>\t       \t\t\t\t\t\t\n");
      out.write("           </form>\n");
      out.write("        </div>\n");
      out.write("</div> \n");
      out.write("<button type=\"button\" class=\"btn btn-primary btn-lg active\" style=\"background-color: #5cb85c\" id=\"buttonGuardarCita\" >\n");
      out.write("        Guardar                                                 \n");
      out.write("</button>\n");
      out.write("</div>\t");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
