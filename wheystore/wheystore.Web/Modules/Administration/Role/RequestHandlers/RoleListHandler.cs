using MyRow = wheystore.Administration.RoleRow;

namespace wheystore.Administration;
public interface IRoleListHandler : IListHandler<MyRow> { }

public class RoleListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), IRoleListHandler
{
}