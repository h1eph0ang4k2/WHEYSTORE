using MyRow = wheystore.SanPhamDB.MaGiamGiaRow;

namespace wheystore.SanPhamDB;

public interface IMaGiamGiaDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class MaGiamGiaDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IMaGiamGiaDeleteHandler
{
}