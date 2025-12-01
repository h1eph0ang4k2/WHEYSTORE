using MyRow = wheystore.Administration.RoleRow;

namespace wheystore.Administration;
public interface IRoleDeleteHandler : IDeleteHandler<MyRow> { }

public class RoleDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), IRoleDeleteHandler
{
}