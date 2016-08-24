<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using System.Net;
using System.IO;

public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {

        try
        {
            WebRequest request = WebRequest.Create("http://agl-developer-test.azurewebsites.net/people.json");
            request.Credentials = CredentialCache.DefaultCredentials;
            WebResponse response = request.GetResponse();

            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            response.Close();

            context.Response.ContentType = "application/json";
            context.Response.Write(responseFromServer);
        }
        catch (Exception ex)
        {
            context.Response.Write(ex.Message);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}