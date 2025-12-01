using MyRow = wheystore.SanPhamDB.DanhMucTinTucRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucTinTucDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class DanhMucTinTucDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IDanhMucTinTucDeleteHandler
{
}