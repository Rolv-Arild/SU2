package info;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/service/")
public class Services {
    private static String info;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getInfo() {
        return info;
    }

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void endreInfo(String i) {
        info = i;
    }
}
