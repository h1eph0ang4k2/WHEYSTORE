using MyRow = wheystore.SanPhamDB.TinTucRow;

namespace wheystore.SanPhamDB;

public interface ITinTucDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class TinTucDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITinTucDeleteHandler
{
}