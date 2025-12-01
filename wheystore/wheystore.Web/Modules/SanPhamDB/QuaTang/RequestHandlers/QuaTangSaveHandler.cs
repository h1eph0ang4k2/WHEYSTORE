using MyRow = wheystore.SanPhamDB.QuaTangRow;

namespace wheystore.SanPhamDB;

public interface IQuaTangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class QuaTangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IQuaTangSaveHandler
{
}