using MyRow = wheystore.Administration.RoleRow;

namespace wheystore.Administration;
public interface IRoleRetrieveHandler : IRetrieveHandler<MyRow> { }
public class RoleRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), IRoleRetrieveHandler
{
}